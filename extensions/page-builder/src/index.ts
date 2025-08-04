import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
	id: 'page-builder',
	name: 'Page Builder',
	icon: 'web',
	description: 'Visual page builder for templates',
	component: InterfaceComponent,
	options: null,
	types: ['json', 'text'],
});