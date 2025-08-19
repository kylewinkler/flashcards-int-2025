// flashcards.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Folder } from './folder.schema';

@Injectable()
export class FolderService {
  constructor(
    @InjectModel(Folder.name) private folderModel: Model<Folder>,
  ) {}

  async findAll(userId: string) {
    return await this.folderModel.find({ userId });
  }

  async findById(folderId: string, userId: string) {
    return this.folderModel.findOne({ _id: folderId, userId });
  }

  async create(userId: string, input: { name: string }) {
    const newFolder = new this.folderModel({
      ...input,
      userId,
    });

    await newFolder.save();
    return String(newFolder.id);
  }
}
