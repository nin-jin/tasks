namespace $.$$ {
	export class $my_tasks_task_row extends $.$my_tasks_task_row {
		
		@ $mol_mem
		start() {
			return this.task_start().toString( `DD/MM/YY` )
		}
		
		@ $mol_mem
		duration() {
			return `[${ this.task_duration().toString( `#D` ) }]`
		}
		
		@ $mol_mem
		end() {
			return this.task_end().toString( `DD/MM/YY` )
		}
		
	}
}
