import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FindProductDto } from '../product/dto/find-product.dto';
import { TopPageModel } from './top-page.model/top-page.model';

@Controller('top-page')
export class TopPageController {
  @Post('creat')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {}
  @Get(':id')
  async get(@Param('id') id: string) {

  }
  @Delete(':id')
  async delete(@Param('id') id: string, @Body() dto: TopPageModel) {

  }
  @Patch()
  async patch(@Param('id') id: string, @Body() dto: TopPageModel) {

  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto) {

  }
}
