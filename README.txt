CONTRIBUTORS
David Donohue (dado@drupal.org) - this module
Jeff Eaton (eaton@drupal.org) - votingapi module
Earl Miles (merlinofchaos@drupal.org) - views module

OVERVIEW
This module enables users to post a review of any node.  This module is inspired by some of the ubiquitous user review functionality seen in the internet, such as amazon.com.
A userreview consists of a voting widget (0-10 votes), a title, and a review_text field.  Administrators configure which node types should
be reviewable.  This module places voting results, review forms, and paginated lists of user reviews after each
node of these types.  Each user may submit a single review for each node.  

Although this module currently permits voting on a 0-10 scale, it should not be hard to have a more flexible scale,
such as A+ through F, or any sequence of numbers.  This module supports voting on a single axis only (and does
not support voting on multiple independent factors like price, customer service).

It uses the votingapi to handle voting values, and it uses the views module to list user reviews under each reviewed
node.  Since votingapi supporting views module as well, you can generate interesting blocks or pages of 
top rated nodes of a given type in a given category, etc.

DEPENDENCIES
This module works in Drupal 4.7.  It requires the votingapi module and the views module to function.

INSTALATION
(1) Place the userreview folder in your modules direcotry.  This folder should contain userreview.module, 
userreview.css, userreview.js
(2) Execute the SQL in userreview.mysql agaisnt your MySQL database.  The module should work for PostgreSQL,
with minor modification to this SQL script only.

CONFIGURATION
(1) Go to admin/access to set permissions.  Typically you would grant authenticated users the right to 
"create user review" and to "edit own user reviews"
(2) Go to admin/settings/userreview to set configuration options.  Settings you can configure here include
	(a) which node types to expose to user reviewing
	(b) the number of nodes to display per page under each reviewed node,
	(c) whether the title and/or review_text fields should be required
	(d) the labels you wish to be displayed in several locations.
	
OUTPUT FIELDS
When viewing a reviewed node, this module adds content to the $node->body field.  It also makes the elements
of the content avaialable as separate fields:
$node->userreview->average_vote - contains the HTML displaying the average vote value, when votes have been cast
$node->userreview->current_user_review - contains the HTML displaying the current user's review, when the current
user has submitted a review for this node
$node->userreview->review_form - contains the HTML displaying the form to submit a user review, when the current
user has not submitted a review for this node
$node->userreview->review_list - contains the HTML showing the list of user reviews, when reviews have been submitted

INTEROPERATION WITH OTHER MODULES
Userreviews are nodes, and thus they work well with userpoints module.  To grant points for submitting a userreview,
simply set the points for the userreview node in the admin/settings/userpoints area.

