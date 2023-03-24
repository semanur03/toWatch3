import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Inhalt } from '../../shared/inhalt';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() inhalt!: Inhalt;
  @Output() updateEvent = new EventEmitter<Inhalt>();
  form: FormGroup;

  constructor(private fb: FormBuilder, private location: Location) {
    this.form = this.fb.group(
      {
        idControl: ['', Validators.required],
        titelControl: ['', Validators.required],
        beschreibungControl: ['', Validators.required],
        genreControl: ['', Validators.required],
        kategorieControl: ['', Validators.required],
        wasControl: ['', Validators.required],
        statusControl: ['', Validators.required],
        bewertungControl: ['', Validators.required],
      }
    );this.inhalt = { id: 0, titel: '', beschreibung: '', genre: '', kategorie:'', was: '', status:'', bewertung:0,};
  }

  ngOnInit(): void {
    this.form.patchValue({
      idControl: this.inhalt?.id,
      titelControl: this.inhalt?.titel,
      beschreibungControl: this.inhalt?.beschreibung,
      genreControl: this.inhalt?.genre,
      kategorieControl: this.inhalt?.kategorie,
      wasControl: this.inhalt?.was,
      statusControl: this.inhalt?.status,
      bewertungControl: this.inhalt?.bewertung,

    });
  }

  onSubmit(): void {
    const values = this.form.value;
    this.inhalt.id = values.idControl;
    this.inhalt.titel = values.titelControl;
    this.inhalt.beschreibung= values.beschreibungControl;
    this.inhalt.genre = values.genreControl;
    this.inhalt.kategorie = values.kategorieControl;
    this.inhalt.was = values.wasControl;
    this.inhalt.status= values.statusControl;
    this.inhalt.bewertung = values.bewertungControl;
    this.updateEvent.emit(this.inhalt);
  }

  cancel(): void {
    this.location.back();
  }
}