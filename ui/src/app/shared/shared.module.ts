import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe, FilterPipeEqualityOptions, KvpPipe, OrderByPipe, SkipPipe, StringifyPipe} from './object.pipe';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterPipe, KvpPipe, OrderByPipe, SkipPipe, StringifyPipe],
  exports:[FilterPipe, KvpPipe, OrderByPipe, SkipPipe, StringifyPipe]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers:[
      ]
    }
  }
}
