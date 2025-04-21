import { Controller, Get } from '@nestjs/common';

@Controller('/podcasts')
export class PodcastsController {
  @Get()
  getAllPodcasts() {
    return 'all podcasts';
  }
}
