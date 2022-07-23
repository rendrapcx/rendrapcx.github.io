
import Route from '@ioc:Adonis/Core/Route'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Goal from 'App/Models/Goal'
import User from 'App/Models/User'

Route.group(() => {
    Route.group(() => {
        // Route.get('/', async ({ auth }) => {
        //     // /*** Query Builder ***/
        //     // const goal = await Goal
        //     //     .query()          //@ts-ignore
        //     //     .where('user_id', auth.user?.id)
        //     // return goal

        //     /* Base Model */
        //     // const user = await User.findOrFail(auth.use('api').user?.id)
        //     const user = await User.findOrFail(auth.user?.id)
        //     const goal = user.related('goals').query()
        //     return goal
        // })

        /* CREATE : /api/post */
        Route.post('/', async ({ auth, request }) => {
            const user = await User.findOrFail(auth.user?.id)

            // const goal = await user
            //  .related('goals')
            //  .create({
            //     text: request.input('text'),
            //    })
            // return goal

            const goal = new Goal()
            goal.text = request.input('text')
            await user
                .related('goals')
                .save(goal)
            return goal
        })

        /* READ : Get All or Get One */
        Route.get('/:id?', async ({ auth, params }) => {
            const user = await User.findOrFail(auth.user?.id)
            if (params.id) {
                return user.related('goals').query().where('id', params.id)
            } else {
                return user.related('goals').query()
            }
        })

        /* UPDATE : /api/put/:id */
        Route.put('/:id', async ({ auth, request, params }) => {
            const user = await User.findOrFail(auth.user?.id)
            const goal = await user
                .related('goals')
                .updateOrCreate({ id: params.id }, { text: request.input('text') })
            return goal
        })

        /* DELETE : */
        Route.delete('/:id', async ({ auth, params }) => {
            const userId = auth.user?.id

            const data = await Goal.findOrFail(params.id)
            if (userId === data.userId) {
                await data.delete()
                return { INFO: 'delete sukses', data }
            } else {
                return { message: 'kamu tidak punya data ini' }
            }
        })


    }).prefix('/goal').middleware('auth')
}).prefix('/api')