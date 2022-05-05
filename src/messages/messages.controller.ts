import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import {createMessageDto} from './dto/create-message.dto'
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService){

  }

  @Get()
  getAll(){
    return this.messagesService.getAll()
  }

   @Get('id')
  getMessage(@Param('id')id: string){
    return this.messagesService.getById(id)
  }

  @Post()
   create(@Body() createMessageDto:createMessageDto){
return this.messagesService.create(createMessageDto)
  }
}
