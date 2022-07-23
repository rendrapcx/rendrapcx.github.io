/**
 * filename: /app/modules/User/routes.ts
 * atau : /start/routes/user.ts
 * import to start routes.ts
 * 
 * import '/app/modules/User/routes.ts'
 * or
 * import './routes/user.ts'
 */

import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

Route.group(() => {
    Route.get('/users', async () => {
        const user = await User.all()
        return { user }
    })

    Route.post('/logout', async ({ auth }) => {
        await auth.use('api').revoke()
        return { Revoke: true }
    })

    Route.post('/login', async ({ auth, request }) => {
        const { username, email, password } = request.only(['username', 'email', 'password'])
        try {
            return await auth
                .use('api')
                .attempt(email || username, password, { expiresIn: '7days' })
        } catch (error) {
            return { error }
        }
    })

    Route.post('/register', async ({ request }) => {
        const userSchema = schema.create({
            username: schema.string({ trim: true }, [
                rules.unique({ table: 'users', column: 'username', caseInsensitive: true })
            ]),
            email: schema.string({ trim: true }, [
                rules.unique({ table: 'users', column: 'email', caseInsensitive: true }),
                rules.email()]),
            password: schema.string({}, [rules.maxLength(8)])
        })

        // validate & save
        try {
            await User.create(await request.validate({ schema: userSchema }))
            return { INFO: 'Register Success...' }
        } catch (error) {
            return { error }
        }
    })
}).prefix('/api')
