import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'safeHtml',
})
@Injectable({
  providedIn: 'root',
})
export class FlowersService implements PipeTransform {
  public flowers: any;
  greet = 'good day';
  img: any;
  constructor(private _sanitizer: DomSanitizer) {}
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }

  six(mainflower, secondary) {
    // console.log(secondary);
    this.img = mainflower;

    let random = ['sunflower', 'lily'];

    let template = this._sanitizer.bypassSecurityTrustHtml(
      ' <img src="http://192.168.100.128/bloompod_api/base/bouquet-by-six.png" style="width: 250px; height:250px;" alt="bouquet" /><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${mainflower}` +
        '.png" style="width: 50px;position: absolute;left: 150px;top: 90px;z-index: 2;"/><img src="http://192.168.100.128/bloompod_api/flowessrs/' +
        `${mainflower}` +
        '.png" style="width: 50px;position: absolute;left: 100px;top: 70px;z-index: 1;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${mainflower}` +
        '.png" style="width: 50px;position: absolute;left: 200px;top: 80px;z-index: 1;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${secondary}` +
        '.png" style="width: 50px;position: absolute;left: 150px;top: 50px;z-index: 1;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${secondary}` +
        '.png" style="width: 50px;position: absolute;left: 120px;top: 130px;z-index: 1;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${secondary}` +
        '.png" style="width: 50px;position: absolute;left: 170px;top: 130px;z-index: 1;"/>'
    );

    return template;
  }

  nine(mainflower, secondary) {
    // console.log(secondary);
    this.img = mainflower;

    let random = ['sunflower', 'lily'];

    let template = this._sanitizer.bypassSecurityTrustHtml(
      ' <img src="http://192.168.100.128/bloompod_api/base/bouquet-by-nine.png" style="width: 250px; height:250px;" alt="bouquet" /><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${mainflower}` +
        '.png" style="width: 50px;position: absolute;left: 150px;top: 110px;z-index: 2;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${mainflower}` +
        '.png" style="width: 50px;position: absolute;left: 125px;top: 80px;z-index: 2;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${mainflower}` +
        '.png" style="width: 50px;position: absolute;left: 175px;top: 80px;z-index: 2;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${secondary}` +
        '.png" style="width: 50px;position: absolute;left: 185px;top: 45px;z-index: 1;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${secondary}` +
        '.png" style="width: 50px;position: absolute;left: 115px;top: 45px;z-index: 1;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${secondary}` +
        '.png" style="width: 50px;position: absolute;left: 90px;top: 90px;z-index: 1;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${secondary}` +
        '.png" style="width: 50px;position: absolute;right: 70px;top: 90px;z-index: 1;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${secondary}` +
        '.png" style="width: 50px;position: absolute;left: 110px;bottom: 90px;z-index: 1;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${secondary}` +
        '.png" style="width: 50px;position: absolute;right: 90px;bottom: 90px;z-index: 1;"/>'
    );

    return template;
  }

  twelve(mainflower, permutation) {
    // console.log(permutation[0]);
    // console.log(permutation[1]);
    let secondary = permutation[0];
    let tertiary = permutation[1];
    this.img = mainflower;

    let random = ['sunflower', 'lily'];

    let template = this._sanitizer.bypassSecurityTrustHtml(
      ' <img src="http://192.168.100.128/bloompod_api/base/bouquet-by-twelve.png" style="width: 250px; height:250px;" alt="bouquet" /><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${mainflower}` +
        '.png" style="width: 45px;position: absolute;left: 150px;top: 80px;z-index: 2;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${mainflower}` +
        '.png" style="width: 45px;position: absolute;left: 140px;bottom: 90px;z-index: 2;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${mainflower}` +
        '.png" style="width: 45px;position: absolute;left: 125px;top: 100px;z-index: 2;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${mainflower}` +
        '.png" style="width: 45px;position: absolute;right: 125px;top: 100px;z-index: 2;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${tertiary}` +
        '.png" style="width: 45px;position: absolute;left: 85px;top: 100px;z-index: 1;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${secondary}` +
        '.png" style="width: 45px;position: absolute;left: 100px;top: 65px;z-index: 1;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${tertiary}` +
        '.png" style="width: 45px;position: absolute;left: 125px;top: 45px;z-index: 1;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${secondary}` +
        '.png" style="width: 45px;position: absolute;left: 100px;bottom: 85px;z-index: 1;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${secondary}` +
        '.png" style="width: 45px;position: absolute;right: 85px;top: 100px;z-index: 1;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${tertiary}` +
        '.png" style="width: 45px;position: absolute;right: 100px;top: 65px;z-index: 1;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${secondary}` +
        '.png" style="width: 45px;position: absolute;right: 125px;top: 45px;z-index: 1;"/><img src="http://192.168.100.128/bloompod_api/flowers/' +
        `${tertiary}` +
        '.png" style="width: 45px;position: absolute;right: 100px;bottom: 85px;z-index: 1;"/>'
    );

    return template;
  }
}
