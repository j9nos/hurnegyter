/*
 * File: app.components.ts
 * Author: Olah Janos Gergely
 * Copyright: 2022, olajg
 * Group: Szoft N/2
 * Date: 2022-01-13
 * Github: https://github.com/olahjg/
 * Licenc: GNU GPL
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hurnegyter';
  result: string = '...';
  hurnegyterForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.#introduce();
  }
  ngOnInit(): void {
    this.#init();
  }
  #init() {
    this.hurnegyterForm = this.formBuilder.group({
      sideA: new FormControl(),
      sideB: new FormControl(),
      sideC: new FormControl(),
      sideD: new FormControl(),
    });
  }
  onSubmit() {
    this.#calcArea(
      this.hurnegyterForm.controls['sideA'].value,
      this.hurnegyterForm.controls['sideB'].value,
      this.hurnegyterForm.controls['sideC'].value,
      this.hurnegyterForm.controls['sideD'].value
    );
  }
  #introduce(): void {
    console.log('Olah Janos Gergely\nSzoft N/2\n2022-01-13');
  }
  #calcArea(a: number, b: number, c: number, d: number): void {
    var s: number = this.#calcHalfArea(a, b, c, d);
    var T: number = Math.sqrt((s - a) * (s - b) * (s - c) * (s - d));
    this.result = !isNaN(T) ? T.toFixed(3) : 'Nincs ilyen arány';
  }
  #calcHalfArea(a: number, b: number, c: number, d: number): number {
    return (a + b + c + d) / 2;
  }
}
