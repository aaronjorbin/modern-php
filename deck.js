import { slides as intro } from './sections/intro.mdx';
import { slides as history } from './sections/history.mdx';
import { slides as importance } from './sections/importance.mdx';
import { slides as planning } from './sections/planning.mdx';
import { slides as testing } from './sections/testing.mdx';
import { slides as features } from './sections/features.mdx';
import { slides as outro } from './sections/outro.mdx';

import future from '@mdx-deck/themes/future';
import highlight from '@mdx-deck/themes/syntax-highlighter';

export const themes = [ future, highlight ]

export const slides = [
	...intro, 
	...history,
	...importance,
	...planning, 
	...testing, 
	...features, 
	...outro
];
