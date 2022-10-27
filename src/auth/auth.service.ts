import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { use } from 'passport';
import { response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(Mobile_No: string, pass: string): Promise<any> {
    console.log('I got the user');
    const user = await this.usersService.findOne(Mobile_No);
    //this is how the bycript will check the hash created password got it form the bycript git
    // https://github.com/kelektiv/node.bcrypt.js#readme
    // console.log(bcrypt.compareSync(pass, user.pass_word), 'password check');
    if (user && bcrypt.compareSync(pass, user.pass_word)) {
      const { pass_word, ...result } = user;
      console.log('i am findbyone result', result);
      return result;
    }
    return null;
  }

  async login(user: any) {
    let payload = { Mobile_No: user.Mobile_No, sub: user.pass_word };
    let response_of_login = await this.validateUser(
      payload.Mobile_No,
      payload.sub,
    );
    // console.log(response_of_login);
    if (response_of_login != null) {
      return {
        access_token: this.jwtService.sign(response_of_login),
        userInfo: response_of_login,
      };
    } else {
      return {
        message: 'unatuhrized',
      };
    }
  }

  async SignUp(body): Promise<any> {
    // return 'you got me';
    this.usersService.SignUP(body);
  }
}
