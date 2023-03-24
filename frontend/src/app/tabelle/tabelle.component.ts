import { Component, Input, OnInit } from '@angular/core';
import {BackendService} from '../shared/backend.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Inhalt } from '../shared/inhalt';
import {HttpErrorResponse} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabelle',
  templateUrl: './tabelle.component.html',
  styleUrls: ['./tabelle.component.css']
})
export class TabelleComponent implements OnInit {
  inhalte!: Inhalt[];
  inhalt!: Inhalt;
  selectedId!: number;
  path!: Observable<string>;
  error!: HttpErrorResponse;
  closeResult = '';
  form: FormGroup;

  constructor(
    private cs: BackendService, 
    private route: ActivatedRoute,
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private fb: FormBuilder,
  ) {
      // Konfiguration des modalen Dialogs
    config.backdrop = 'static';   // schliesst nicht, wenn man in das Fenster dahinter klickt
    config.keyboard = false;      // Modaler Dialog kann nicht durch ESC beendet werden
    // Formular fuer delete
    this.form = this.fb.group(
      {
        iControl: ['', Validators.required],
        ttControl: ['', Validators.required],
        beschControl: ['', Validators.required],
        genControl: ['', Validators.required],
        wControl: ['', Validators.required],
        katControl: ['', Validators.required],
        stControl: ['', Validators.required],
        bewControl: ['', Validators.required],
      }
    );
    }

  ngOnInit(): void {
    this.readAll();

    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.selectedId === 0) {
      this.readAll();
    }
    else {
      console.log('id = ' + this.selectedId);
      this.readOne(this.selectedId);
    }
  }

  trackByInhalt(index: number, inhalt: Inhalt): number { return inhalt.id; }

  readAll(): void {
    this.cs.getAllInhalt().subscribe(
    {
      next: (response) => {
      this.inhalte = response;
      console.log(this.inhalte);
      return this.inhalte;
      },
      error: (err) => console.log(err),
      complete: () => console.log('getAll() completed')
    }); 
    
  } 
  readOne(id: number): void {
    this.cs.getInhaltById(id).subscribe(
      (response: Inhalt) => this.inhalt = response,
      error => this.error = error,
    );
  }

  deleteOne(inhaltId: number): void {
    this.cs.deleteOneInhalt(inhaltId);
    window.location.reload();
  }
    
  open(content: any, id: number): void {
    this.readOne(id);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult);
      if (result === 'delete')
      {
        this.deleteOne(this.inhalt?.id);
      }
    });
  }
  update(inhalt: Inhalt): void {
    this.inhalt = inhalt;
    this.cs.update(this.inhalt.id, this.inhalt);
    this.router.navigateByUrl('/tabelle');
  }
  
}
