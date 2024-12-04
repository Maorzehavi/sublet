import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

function BreadCrumbs({ name }: { name: string }) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>{name}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbSeparator>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default BreadCrumbs