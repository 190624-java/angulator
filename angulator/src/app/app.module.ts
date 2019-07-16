import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';

//for pokemon example
import { HttpClientModule } from '@angular/common/http';
//
import { AppComponent } from './app.component';
import { AccessComponent } from './components/access/access.component';
import { ClassComponent } from './components/class/class.component';
import { CliComponent } from './components/cli/cli.component';
import { ComponentComponent } from './components/component/component.component';
import { DecoratorComponent } from './components/decorator/decorator.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { MainComponent } from './components/main/main.component';
import { ModuleComponent } from './components/module/module.component';
import { NavComponent } from './components/nav/nav.component';
import { NpmComponent } from './components/npm/npm.component';
import { PackageComponent } from './components/package/package.component';
import { RoutingComponent } from './components/routing/routing.component';
import { ServiceComponent } from './components/service/service.component';
import { TemplateComponent } from './components/template/template.component';
import { TypesComponent } from './components/types/types.component';
import { TypeScriptComponent } from './components/typescript/typescript.component';
import { DiComponent } from './components/di/di.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { StructuralComponent } from './components/structural/structural.component';
import { FlashcardComponent } from './components/structural/flashcard/flashcard.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { HttpComponent } from './components/http/http.component';
import { PokemonService } from './services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    AccessComponent,
    ClassComponent,
    CliComponent,
    ComponentComponent,
    DecoratorComponent,
    DirectiveComponent,
    MainComponent,
    ModuleComponent,
    NavComponent,
    NpmComponent,
    PackageComponent,
    RoutingComponent,
    ServiceComponent,
    TemplateComponent,
    TypesComponent,
    TypeScriptComponent,
    DiComponent,
    DatabindingComponent,
    StructuralComponent,
    FlashcardComponent,
    PipeComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
