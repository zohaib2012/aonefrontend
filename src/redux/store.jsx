import { setupListeners } from '@reduxjs/toolkit/query';
import { configureStore } from "@reduxjs/toolkit";
import { commonapi } from "./Comonapi";
import { p_detailapi } from './p.detailapi';
import { transcationapi } from './Depositmoney';
import { emailapi } from './emailverification';
import { createaccountapi } from './createaccountapi';
import { documentapi } from './documentapi';
import { residenceapi } from './residenceapi';
import { messagesapi } from './messagesapi';
import { withdrawapi } from './withdrawapi';


export const store = configureStore({
    reducer: {

        [commonapi.reducerPath]: commonapi.reducer,
        [documentapi.reducerPath]: documentapi.reducer,
        [p_detailapi.reducerPath]: p_detailapi.reducer,
        [transcationapi.reducerPath]: transcationapi.reducer,
        [emailapi.reducerPath]: emailapi.reducer,
        [createaccountapi.reducerPath]: createaccountapi.reducer,
        [residenceapi.reducerPath]: residenceapi.reducer,
        [messagesapi.reducerPath]:messagesapi.reducer,
        [withdrawapi.reducerPath]:withdrawapi.reducer

    },


    middleware: (getDefaultmiddleware) => getDefaultmiddleware()
        .concat(commonapi.middleware)
        .concat(documentapi.middleware)
        .concat(p_detailapi.middleware)
        .concat(transcationapi.middleware)
        .concat(emailapi.middleware)
        .concat(createaccountapi.middleware)
        .concat(residenceapi.middleware)
        .concat(messagesapi.middleware)
        .concat(withdrawapi.middleware)
})
setupListeners(store.dispatch);

