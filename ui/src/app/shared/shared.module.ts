import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe, TopPipe, KvpPipe, OrderByPipe, SkipPipe, StringifyPipe} from './object.pipe';
import { environment } from '../../environments/environment';
export { environment };
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilterPipe, KvpPipe, OrderByPipe, TopPipe, SkipPipe, StringifyPipe],
  exports:[FilterPipe, KvpPipe, OrderByPipe, TopPipe, SkipPipe, StringifyPipe]
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
