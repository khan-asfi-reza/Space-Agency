export const Container = ({className, children, ...props}) => {
    return (
        <div className={"xl:px-24 lg:px-20 md:px-16 md:w-full md:max-w-full container mx-auto " + className} {...props}>
            {children}
        </div>
    )
}