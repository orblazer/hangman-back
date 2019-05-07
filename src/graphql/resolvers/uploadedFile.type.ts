import 'reflect-metadata'
import * as TypeGQL from 'type-graphql'
import { Lib } from '@types'

@TypeGQL.ObjectType()
export default class UploadedFile implements Lib.UploadFileResult {
  @TypeGQL.Field()
  public id: string

  @TypeGQL.Field()
  public filename: string

  @TypeGQL.Field()
  public mimetype: string

  @TypeGQL.Field()
  public encoding: string

  @TypeGQL.Field()
  public path: string

  @TypeGQL.Field()
  public fullPath: string

  @TypeGQL.Field()
  public folderPath: string
}
