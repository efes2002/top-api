import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ProductModel } from '../../product/product.model/product.model';

export type ReviewDocument = HydratedDocument<ReviewModel>;

@Schema({ timestamps: true, _id: true })
export class ReviewModel {
  @Prop()
  name: string;
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  rating: number;
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Review' })
  productId: ProductModel;
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewModel);
