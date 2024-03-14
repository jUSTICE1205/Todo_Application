const zod = require ("zod");

const createTodoCheck = zod.object( {
    title : zod.string(),
    description : zod.string()
})

const updateTodoCheck = zod.object( {
    id : zod.string()
})

module.exports = {
    createTodoCheck, updateTodoCheck
}