module.exports = {
    messages: {
        errorGeneric: { status: false, message: `A error has ocurred!` },
        errorUnexpected: { status: false, message: `A unexpected error has ocurred!` },
        errorConnectionDb: `Error connecting to database`,
        errorMongoFind: `Error to execute find method of mongodb.`,
        addSuccesss: { status: true, message: `Registro agregado exitosamente!` },
        updateSuccesss: { status: true, message: `Registro actualizado exitosamente!` },
        deleteSuccesss: { status: true, message: `Registro eliminado exitosamente!` },
        addFail: { status: false, message: `No se ha podido agregar el registro.` },
        updateFail: { status: false, message: `No se ha podido actualizar el registro.` },
        deleteFail: { status: false, message: `No se ha podido eliminar el registro.` },
        getFail: { status: false, message: `No se ha podido realizar la consulta.` }
    },
    db: {
        programacion: 'procinal-programacion'
    }
};