import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelNumComponent } from './component/model-num/model-num.component';
import {StoreModule} from '@ngrx/store';
import {modelNum} from './redurces/model-num';
import {list} from './redurces/list';
import {EffectsModule} from '@ngrx/effects';
import {ListEffects} from './effect/list-effects';
import { ListComponentComponent } from './component/list-component/list-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ModelNumComponent,
    ListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ modelNum, list}),   /*配置redurcer*/
    EffectsModule.forRoot([ListEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
