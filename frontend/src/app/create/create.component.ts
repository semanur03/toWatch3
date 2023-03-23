import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Inhalt} from '../shared/inhalt';
import {BackendService} from '../shared/backend.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  inhalt!: Inhalt;

  constructor(
    private cs: BackendService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group(
      {
        titelControl: ['', Validators.required],
        beschreibungControl: ['', Validators.required],
        genreControl: ['', Validators.required],
        wasControl: ['', Validators.required],
        kategorieNameControl: ['', Validators.required],
        statusControl: ['', Validators.required],
        bewertungControl: ['', Validators.required],
      }
    );
    this.inhalt = { id: 0, titel: '', beschreibung: '', genre: '', was: '', kategorie:'', status:'', bewertung:0,};
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn(this.form.value);
    const values = this.form.value;
    this.inhalt.titel = values.titelControl;
    this.inhalt.beschreibung = values.beschreibungControl;
    this.inhalt.genre = values.genreControl;
    this.inhalt.was = values.wasControl;
    this.inhalt.kategorie = values.kategorieControl;
    this.inhalt.status = values.statusControl;
    this.inhalt.bewertung = values.bewertungControl;
    console.log(this.inhalt);
    this.cs.createOneInhalt(this.inhalt);
    this.router.navigate(['/tabelle']);
  }

  cancel(): void {
    this.router.navigate(['/tabelle']);
  }
}