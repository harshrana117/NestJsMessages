import { Body } from "@nestjs/common";
import { MessagesRepository } from "./messages.repositories";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessageService {
  constructor(public messageRepo: MessagesRepository) {
  }

  findOne(id: string) {
    return this.messageRepo.findOne(id)
  }

  findAll(){
    return this.messageRepo.findAll()
  }

  create(content: string ){
    return this.messageRepo.create(content)
  }

}