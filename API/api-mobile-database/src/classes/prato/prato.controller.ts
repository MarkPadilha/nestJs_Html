import { Controller, Get, Post } from '@nestjs/common';
import { PratoService } from './prato.service';
import { PratoEntity } from './prato.entity';

@Controller()
export class PratoController {
  constructor(private readonly pratoService: PratoService) {}

  @Get('/listar')
  async listarPratos(): Promise<PratoEntity[]> {
    return this.pratoService.listarPratos();
  }

  @Post()
  async cadastrarPrato(): Promise<PratoEntity>{
    return 

  }
}