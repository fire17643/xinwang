export default {
	mut (context, data) {
		context.commit('mut', data)
	},
	count (context) {
		context.commit('count')
	}
}
