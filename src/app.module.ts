import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:root@cluster0.la4gi.mongodb.net/music-platform?retryWrites=true&w=majority',
    ),
    TrackModule,
  ],
})
export class AppMoudle {}
