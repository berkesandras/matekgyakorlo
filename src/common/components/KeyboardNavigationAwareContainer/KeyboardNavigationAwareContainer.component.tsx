import React, { PropsWithChildren } from "react";

export default function KeyboardNavigationAwareContainer({
    children,
}: PropsWithChildren) {

    return (
        <div>
            {React.Children.map(children, c => c)}
        </div>
    );
}