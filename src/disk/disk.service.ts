import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log(`To get data we need 5 watts of power`);
    this.powerService.supplyPower(5);
    return `Some Random Data`;
  }
}
