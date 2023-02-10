import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from '../shared/services/prisma.service';


@Module({
  providers: [ProductService, PrismaService],
  controllers: [ProductController]
})
export class ProductModule {}
