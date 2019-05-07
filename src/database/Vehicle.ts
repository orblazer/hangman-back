import { Typegoose, prop, Ref, InstanceType } from 'typegoose'
import mongoose from 'mongoose'
import { Database, Lib } from '@types'
import { Website } from './Website'
import { User } from './User'

export class Vehicle extends Typegoose {
  @prop({ required: true, ref: Website })
  public websiteId: Ref<Website>
  @prop()
  public type?: string

  @prop()
  public title: Database.TextLocalized

  @prop()
  public description: Database.TextLocalized

  @prop({ _id: false })
  public image: Lib.UploadImageResult

  @prop({ default: false })
  public visible: boolean

  @prop({ required: true, ref: User })
  public authorId: Ref<User>

  @prop({ default: Date.now })
  public createdAt: Date

  @prop()
  public updatedAt?: Date
}

export type Instance = InstanceType<Vehicle>

export default new Vehicle().getModelForClass(Vehicle, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'vehicles', timestamps: true }
})
