import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingWithRealClassesComponent } from './testing with real classes/testing-wtih-real-classes.component';
import { TestBedComponent } from './angular test bed/test-bed/test-bed.component';

@NgModule({
  declarations: [TestingWithRealClassesComponent, TestBedComponent],
  imports: [
    CommonModule
  ]
})
export class TestingsModule { }
