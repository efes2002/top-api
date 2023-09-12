import { Injectable } from '@nestjs/common';
import { ReviewDocument } from './review.model/review.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel('Review') private readonly reviewModel: Model<ReviewDocument>,
  ) {}
  async createReview(dto: CreateReviewDto): Promise<ReviewDocument> {
    return new this.reviewModel(dto).save();
  }
  async delete(id: string): Promise<{ deletedCount?: number }> {
    try {
      const result = await this.reviewModel.deleteOne({ _id: id });
      return { deletedCount: result.deletedCount };
    } catch (error) {
      console.error('Ошибка при удалении обзора:', error);
      throw error;
    }
  }
}
