import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import keys from './config/keys';

@Module({
  imports: [MongooseModule.forRoot(keys.mongoURI), ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
