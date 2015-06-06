# zdc-ravetext
A custom Angular directive for creating fun, colored, strobing text with no dependencies other than AngularJS.

Feature are planned to be added. At time of writing, this is a protoype showing the basic concept.
Here are a few goals of zdc-ravetext:
* Have no dependencies outside of Angular.
* Be simple and easy to use.
* Follow good Angular and Javascript standards and practices.
* Eventually be part of a larger set of frontend tools.

# Documentation
The directive is used by placing <zdc-ravetext> around the desired text.
Then it is configured by setting the following attributes on $scope.zdcRtConfig.

Documentation follows the following pattern.
* Attribute name (case sensitive)
    * Valid input *type*
    * What it does
    * Example

* background
    * Hexcodes *array of strings*
    * Sets the colors to strobe between.
    * `['#246655', '#cec763', '#c463ce', '#63bace', '#3046bb', '#000000']`
* rate
    * Seconds *string*
    * Sets the speed/rate of the animation.
    * `'1'`

Code example:
` $scope.zdcRtConfig = {
        background  : ['#246655', '#cec763', '#c463ce', '#63bace', '#3046bb', '#000000'],
        rate: '1'
        }; `
        
# Notes
zdc as a prefix is short for z0d14c. Thanks for checking out the directive and if you want to contribute, please follow
the above guidelines and follow the coding style in the project.
