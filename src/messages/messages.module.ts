import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './messages.repositories';
import { MessageService } from './messages.service';


@Module({
  controllers: [MessagesController],
  providers: [MessageService, MessagesRepository]
})
export class MessagesModule {}
