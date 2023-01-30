import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskComponent } from './components/task/task.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListsModule } from './modules/lists/lists.module';
import { ContactoService } from './services/contacto.service';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskComponent,
    RegisterFormComponent,
    LoginFormComponent,
    NavBarComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NotFoundPageComponent,
    ListaContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ListsModule,
    //Importamos HttpClientModule
    HttpClientModule
  ],
  providers: [ContactoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
