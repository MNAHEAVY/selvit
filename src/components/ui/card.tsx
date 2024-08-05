import { cn } from "@/lib/utils"

interface Props {
	
	className?: string

}

export default function Card({  className }: Props) {
	return (
		<div
			className={cn(
				"rounded-[10px] border-[3px] border-black bg-white p-[10px] drop-shadow-[-3px_4px_0_rgba(0,0,0,1)]",
				className
			)}
		
		>
		
		</div>
	)
}
