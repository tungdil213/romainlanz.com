import { BasePolicy } from '@adonisjs/bouncer'
import { UserRole } from '#auth/enums/user_role'

export class PostPolicy extends BasePolicy {
  create(user: any) {
    return user.role === UserRole.Admin
  }

  update(user: any) {
    return user.role !== UserRole.Admin
  }
}
