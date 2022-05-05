import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesService } from "./messages.service";
import { MessagesController } from "./messages.controller";
import { Messages } from './messages.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Messages])],
providers: [MessagesService],
controllers: [MessagesController]
})

export class MessagesModule{

}