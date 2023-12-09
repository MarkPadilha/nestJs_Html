import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PratoEntity } from './prato.entity';
import { CreatePratoDto } from "../pedido/dto/createPrato.dto";

@Injectable()
export class PratoService {
  constructor(
    @InjectRepository(PratoEntity)
    private pratoRepository: Repository<PratoEntity>,
  ) {}

  async listarPratos(): Promise<PratoEntity[]> {
    return this.pratoRepository.find();
  }

  async createPrato(createPratoDto: CreatePratoDto): Promise<PratoEntity>{
    let prato = await this.pratoRepository.create()
    return  this.pratoRepository.save(prato)
  }
}