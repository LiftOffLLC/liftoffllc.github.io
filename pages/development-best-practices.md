# Coding practices in general

* Codes should reside in Version control. Example Github.
* Project should have a `README.md` containing primary information on project, important links and how to set up project.
* Make use of [editorconfig](http://editorconfig.org/) for formatting source code.
  * Various plugins available.
  * There is no restriction on Editor that you use but ensure that if follows editorconfig.
* Use code linter. For example JsLint. You can set it up at project level.
* Learn [Git](https://git-scm.com/documentation).
  * Learning command line has some learning curve, but way more handy than UI.
  * Use branching in case of any confusion. Branching out in Git is cheap.
  * Proper use of .gitignore - https://git-scm.com/docs/gitignore
  * Don't commit library binaries along with source. For eg. DON'T commit `jar`, `node_modules`, log files etc.

## Git Best Practices

Generally any git project will have a primary branch. This branch is generally called `master`. 
General workflow in Git would be something like following - 
When a developer starts working on a feature, they create a branch from `master`. Once feature is developed it is merged to a qa branch. When build passes QA and is ready to be deployed to production environment, it is merged or rebased to master.

* Create feature branch
* Raise pull request
* Peer code review
* Review changes
* Rebase or merge to master

Read about branching and versioning http://nvie.com/posts/a-successful-git-branching-model/
another article covering git branching https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow

## NodeJs

Use [NVM](https://github.com/creationix/nvm) or similar version manager to manage 

Best practices **External Links**

* http://www.innofied.com/node-js-best-practices/
* https://devcenter.heroku.com/articles/node-best-practices
* https://blog.risingstack.com/node-js-best-practices/

## Ruby

* Use [RVM](https://rvm.io/) to install Ruby
* Stick to a style guide. For eg. [this one](https://github.com/bbatsov/ruby-style-guide)

## Rest best practices

**External links**

* http://jsonapi.org/format/
* http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api
