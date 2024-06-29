import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path : 'about', component : AboutComponent },
    { path : 'home', component : HomeComponent },
    { path : 'contact', component : ContactComponent }
];
