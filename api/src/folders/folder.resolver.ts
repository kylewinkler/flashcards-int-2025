import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import { FolderService } from './folder.service';

@Resolver('Folder')
@UseGuards(GqlAuthGuard)
export class FolderResolver {
  constructor(private readonly folderService: FolderService) {}

  @Query('getFolders')
  getFolders(@CurrentUser() user: any) {
    return this.folderService.findAll(user.id);
  }

  @Query('getFolder')
  getFolder(@Args('id') id: string, @CurrentUser() user: any) {
    return this.folderService.findById(id, user.id)
  }

  @Mutation('createFolder')
  createFolder(@CurrentUser() user: any, @Args('createFolderInput') input: any) {
    return this.folderService.create(user.id, input);
  }
}
