import notify from './notify'
import welcome from './welcome'

const Templates = {
	notify,
	welcome
}

export default function getTemplate(name) {
	return Templates[name]
}