Angular is a framework to deliver client-side applications.

TypeScript --> Compiles to JS. uses (*.d.ts) i.e. typescript definitions file for strong typing, Class-based object-orientation

Application = Components + Services that deliver functionality across components
Component = Template (HTML for UI) + Class (code associated with view; contains: Properties + Methods) + Metadata (identifies class as angular component)
Modules = Help organise application into cohesive blocks of functionality [Root module + feature modules]

Building a Product Management Application:
Components: index.html --> App Component
+ App Component
    - Welcome Page Component
    - Product List Component
        - Rating Star Component
    - Product Detail Component
        - Rating Star Component
+ Product Data Service

Modules: resolve namespace and code organisation issues, App module is the root module, if you import/export anything from a file, it becomes a ES module, Modules contain components, corresponding depending files, a component can belong to only one module

Decorator: function that adds metadata to a class/members/method arguements, scope is limited to the feature it decorates, prefixed with an @ sign. Angular has built in decorators, you can build your own decorators as well. Position the decorator immediately in front of the feature you are decorating. No semi-colon followed after the decorator definition.
