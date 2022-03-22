import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';

@Provide()
export class UserService {
  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      workId: '233787',
      username: 'mockedName',
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
