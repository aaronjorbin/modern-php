import { slides as intro } from './sections/intro.mdx';
import { slides as history } from './sections/history.mdx';
import { slides as importance } from './sections/importance.mdx';
import { slides as planning } from './sections/planning.mdx';
import { slides as testing } from './sections/testing.mdx';
import { slides as features } from './sections/features.mdx';
import { slides as outro } from './sections/outro.mdx';

import aspect43 from '@mdx-deck/themes/aspect-4-3';
import future from '@mdx-deck/themes/future';
import highlight from '@mdx-deck/themes/syntax-highlighter';
import syntaxHighlighterPrism from '@mdx-deck/themes/syntax-highlighter-prism';
import theme from './theme';

export const themes = [ aspect43, future, syntaxHighlighterPrism, theme ]

export const slides = [
	...intro, 
	...history,
	...importance,
	...features,
	...planning,
	...testing, 
	...outro
];
