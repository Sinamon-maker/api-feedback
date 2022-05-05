import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Messages } from './messages.entity';
import { createMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Messages)
    private messagesRepository: Repository<Messages>,
  ) {}

  getAll(): Promise<Messages[]> {
    return this.messagesRepository.find();
  }

  getById(id: string): Promise<Messages> {
    return this.messagesRepository.findOne(id);
  }

  async create(createMessageDto: createMessageDto) {
    return await this.messagesRepository.save(createMessageDto);
  }
}
