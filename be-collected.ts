import {BeDecoratedProps, define} from 'be-decorated/be-decorated.js';
import {register} from 'be-hive/register.js';
import {BeCollectedActions, BeCollectedProps, BeCollectedVirtualProps} from './types';

export class BeCollected implements BeCollectedActions{

}

export interface BeCollected extends BeCollectedProps{}

const tagName = 'be-collected';

const ifWantsToBe = 'collected';

export const upgrade = '*';

define<BeCollectedProps & BeDecoratedProps<BeCollectedProps, BeCollectedActions>, BeCollectedActions>({
    config:{
        tagName,
        propDefaults:{
            ifWantsToBe,
            upgrade,
            virtualProps:[],

        }
    },
    complexPropDefaults:{
        controller: BeCollected
    }
});

register(ifWantsToBe, upgrade, tagName);